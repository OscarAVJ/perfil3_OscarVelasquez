import { useCallback, useEffect, useRef, useState } from 'react';

import { getShows } from '../services/TvMazeService';

export function useShows() {
  const activeRequest = useRef((null));
  const [shows, setShows] = useState( ([]));
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState((null));

  const loadShows = useCallback(async ({ refreshing = false } = {}) => {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;

    if (refreshing) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    setError(null);

    try {
      const data = await getShows({ signal: controller.signal });
      setShows(data);
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setError(requestError.message || 'No fue posible cargar las series.');
      }
    } finally {
      if (activeRequest.current === controller) {
        setIsLoading(false);
        setIsRefreshing(false);
        activeRequest.current = null;
      }
    }
  }, []);

  useEffect(() => {
    loadShows();

    return () => {
      const controller = activeRequest.current;
      activeRequest.current = null;
      controller?.abort();
    };
  }, [loadShows]);

  const refresh = useCallback(() => loadShows({ refreshing: true }), [loadShows]);

  return {
    shows,
    isLoading,
    isRefreshing,
    error,
    retry: loadShows,
    refresh,
  };
}
