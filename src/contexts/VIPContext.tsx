import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface VIPState {
  isVIP: boolean;
  memberNumber: number | null;
  memberName: string;
  totalMembers: number;
}

interface VIPContextType extends VIPState {
  registerMember: (name: string, phone: string, email: string) => Promise<number>;
  logout: () => void;
}

const VIPContext = createContext<VIPContextType | undefined>(undefined);

const STORAGE_KEY = "immoboost_vip";
const COUNTER_KEY = "immoboost_member_count";

export const VIPProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<VIPState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const count = parseInt(localStorage.getItem(COUNTER_KEY) || "12", 10);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...parsed, totalMembers: count };
    }
    return { isVIP: false, memberNumber: null, memberName: "", totalMembers: count };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      isVIP: state.isVIP,
      memberNumber: state.memberNumber,
      memberName: state.memberName,
    }));
    localStorage.setItem(COUNTER_KEY, state.totalMembers.toString());
  }, [state]);

  const registerMember = async (name: string, phone: string, email: string): Promise<number> => {
    // Simulate payment delay
    await new Promise((r) => setTimeout(r, 2500));
    
    const newCount = state.totalMembers + 1;
    if (newCount > 100) throw new Error("Les 100 places sont prises !");
    
    const memberNumber = newCount;
    setState({
      isVIP: true,
      memberNumber,
      memberName: name,
      totalMembers: newCount,
    });
    return memberNumber;
  };

  const logout = () => {
    setState((prev) => ({
      ...prev,
      isVIP: false,
      memberNumber: null,
      memberName: "",
    }));
  };

  return (
    <VIPContext.Provider value={{ ...state, registerMember, logout }}>
      {children}
    </VIPContext.Provider>
  );
};

export const useVIP = () => {
  const ctx = useContext(VIPContext);
  if (!ctx) throw new Error("useVIP must be inside VIPProvider");
  return ctx;
};
