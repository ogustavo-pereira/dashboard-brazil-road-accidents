// Packages
import axios from 'axios';

// Types
import {Positions} from '../types';


interface GetAllMakerPositionsResult {
  data: Array<Positions>;
}

/**
 * Returns all the marker positions in dataset
 * @return {Array<Positions>}
 */
export async function getAllMarkerPositions(): Promise<Array<Positions>> {
  const {
    data: {data},
  } = await axios
      .get<GetAllMakerPositionsResult>(
          String(import.meta.env.VITE_DATASET_ALL_POSITION_RAW_URL),
      )
      .then((response) => {
        return response;
      });

  return data;
}
