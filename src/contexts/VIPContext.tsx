import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

interface VIPState {
  isVIP: boolean;
  memberNumber: number | null;
  memberName: string;
  totalMembers: number;
  loading: boolean;
}

interface VIPContextType extends VIPState {
  registerMember: (name: string, phone: string, email: string) => Promise<number>;
  logout: () => void;
  refreshCount: () => Promise<void>;
}

const VIPContext = createContext<VIPContextType | undefined>(undefined);

export const VIPProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<VIPState>({
    isVIP: false,
    memberNumber: null,
    memberName: "",
    totalMembers: 0,
    loading: true,
  });

  const refreshCount = async () => {
    const { count } = await supabase
      .from("vip_members")
      .select("*", { count: "exact", head: true });
    setState((prev) => ({ ...prev, totalMembers: count || 0 }));
  };

  // Check if current user is VIP on load
  useEffect(() => {
    const init = async () => {
      await refreshCount();

      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data } = await supabase
          .from("vip_members")
          .select("member_number, name")
          .eq("user_id", session.user.id)
          .maybeSingle();
        if (data) {
          setState((prev) => ({
            ...prev,
            isVIP: true,
            memberNumber: data.member_number,
            memberName: data.name,
            loading: false,
          }));
          return;
        }
      }
      setState((prev) => ({ ...prev, loading: false }));
    };
    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const { data } = await supabase
          .from("vip_members")
          .select("member_number, name")
          .eq("user_id", session.user.id)
          .maybeSingle();
        if (data) {
          setState((prev) => ({
            ...prev,
            isVIP: true,
            memberNumber: data.member_number,
            memberName: data.name,
          }));
        }
      } else {
        setState((prev) => ({ ...prev, isVIP: false, memberNumber: null, memberName: "" }));
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const registerMember = async (name: string, phone: string, email: string): Promise<number> => {
    // Sign up user anonymously or with email
    let userId: string;
    
    if (email) {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password: phone, // simplified - use phone as temp password
      });
      if (authError) throw authError;
      userId = authData.user!.id;
    } else {
      const { data: authData, error: authError } = await supabase.auth.signInAnonymously();
      if (authError) throw authError;
      userId = authData.user!.id;
    }

    // Simulate payment delay
    await new Promise((r) => setTimeout(r, 2500));

    // Get next number
    const { data: nextNum } = await supabase.rpc("get_next_member_number");
    const memberNumber = nextNum as number;
    
    if (memberNumber > 100) throw new Error("Les 100 places sont prises !");

    // Insert member
    const { error } = await supabase.from("vip_members").insert({
      user_id: userId,
      member_number: memberNumber,
      name,
      phone,
      email,
    });
    if (error) throw error;

    setState((prev) => ({
      ...prev,
      isVIP: true,
      memberNumber,
      memberName: name,
      totalMembers: prev.totalMembers + 1,
    }));

    return memberNumber;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setState((prev) => ({
      ...prev,
      isVIP: false,
      memberNumber: null,
      memberName: "",
    }));
  };

  return (
    <VIPContext.Provider value={{ ...state, registerMember, logout, refreshCount }}>
      {children}
    </VIPContext.Provider>
  );
};

export const useVIP = () => {
  const ctx = useContext(VIPContext);
  if (!ctx) throw new Error("useVIP must be inside VIPProvider");
  return ctx;
};
