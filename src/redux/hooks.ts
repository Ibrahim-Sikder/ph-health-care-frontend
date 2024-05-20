import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";
import { clearTimeout } from "timers";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();


  
export const useDebounced = ({ searchQuery, delay }: { searchQuery: string; delay: number }) => {
    const [debouncedValue, setDebouncedValue] = useState(searchQuery);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(searchQuery);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [searchQuery, delay]);
  
    return debouncedValue;
  };