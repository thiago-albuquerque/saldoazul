import React, {useMemo} from 'react';

import {Container, ValueBalance, Description} from './styles';

export default function Balance({data}) {
  const balanceName = useMemo(() => {
    if (data.tag === 'saldo') {
      return {
        label: 'Saldo atual',
        color: '#008fff',
      };
    } else if (data.tag === 'receita') {
      return {
        label: 'Receitas de hoje',
        color: '#80AE0F',
      };
    } else {
      return {
        label: 'Despesas de hoje',
        color: '#D44816',
      };
    }
  }, [data]);

  const formatValue = data.saldo.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container bg={balanceName.color}>
      <ValueBalance numberOfLines={1}>
        {(data.saldo = 0 ? `R$ 0.000,00` : formatValue)}
      </ValueBalance>
      <Description>{balanceName.label}</Description>
    </Container>
  );
}
