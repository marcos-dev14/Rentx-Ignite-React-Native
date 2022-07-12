import React, { useEffect, useState } from 'react';
import { CarDataProps } from '../../@types/CarTypes';
import { api } from '../../services/api';

import {
  Container
} from './styles';

export function MyCars() {
  const [cars, setCars] = useState<CarDataProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyCars() {
      try {
        const response = await api.get('schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMyCars();
  },[])

  return (
    <Container>

    </Container>
  );
}