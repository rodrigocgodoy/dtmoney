import { useTransactions } from '../../hooks/useTransaction';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map(({ id, title, amount, category, createAt, type}) => (
            <tr key={id}>
              <td>{title}</td>
              <td className={type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(amount)}
              </td>
              <td>{category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(createAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}