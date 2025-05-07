// lib/auth/useAuthWithDelay.ts
import { useAuth } from '@/components/providers/auth-provider';
import { useEffect, useState } from 'react';

/**
 * 認証確定後も `delayMs` だけ loading を引き延ばすテスト用フック
 */
export const useAuthWithDelay = (delayMs = 1500) => {
  const { user, loading } = useAuth();
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      // 認証が確定したらタイマーをスタート
      const id = setTimeout(() => setLocalLoading(false), delayMs);
      return () => clearTimeout(id);
    }
  }, [loading, delayMs]);

  return {
    user,
    loading: loading || localLoading, // ← artificial loading
  };
};
