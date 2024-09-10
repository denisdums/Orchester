import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";

export type MediaQueriesContextType = {
  isMobile: boolean;
}

export const MediaQueriesContext = createContext<MediaQueriesContextType>({
  isMobile: false,
} as MediaQueriesContextType);

export default function MediaQueriesProvider(props: PropsWithChildren) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleWindowSizeChange()

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }

  return (
    <MediaQueriesContext.Provider value={{isMobile}}>
      {props.children}
    </MediaQueriesContext.Provider>
  );
}

export const useMediaQueries = () => {
  return useContext(MediaQueriesContext);
}