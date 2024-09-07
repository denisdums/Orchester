import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {IFeatureFlags} from "~/interfaces/FeatureFlags.interface";

export type FeatureFlagsContextType = {
  flags: IFeatureFlags | undefined;
}

export const FeatureFlagsContext = createContext<FeatureFlagsContextType>({
  flags: undefined,
} as FeatureFlagsContextType);

export default function FeatureFlagsProvider(props: PropsWithChildren<{ flags: IFeatureFlags }>) {
  return (
    <FeatureFlagsContext.Provider value={{flags: props.flags}}>
      {props.children}
    </FeatureFlagsContext.Provider>
  );
}

export const useFeatureFlags = () => {
  return useContext(FeatureFlagsContext);
}