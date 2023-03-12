// Packages
import axios from 'axios';

// Types
import { Positions } from '../types';

interface GetAllMakerPositionsResult {
  data: Array<Positions>;
}

/**
 * Returns all the marker positions in dataset
 * @return {Array<Positions>}
 */
export async function getAllMarkerPositions(): Promise<Array<Positions>> {
  const {
    data: { data },
  } = await axios
    .get<GetAllMakerPositionsResult>(
      'https://raw.githubusercontent.com/oguhpereira/dataset-road-traffic-accidents-brazil/master/dataset/json-data/total.json'
    )

  return data;
}
