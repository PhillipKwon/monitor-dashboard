import { Metrics } from "@/types/Metrics";
import axios from "axios";

export const fetchMetrics = async (): Promise<Metrics> => {
  const response = await axios.get('/api/metrics');
  return response.data;
}