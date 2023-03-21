import { useState, useEffect } from "react";
import { fetchFire } from "../api";

export function useFire() {
  const [fire, setFire] = useState([]);

  async function _fetchFire() {
    try {
      const fire = await fetchFire();
      setFire(fire);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    _fetchFire();
  }, []);

  return { fire };
}
