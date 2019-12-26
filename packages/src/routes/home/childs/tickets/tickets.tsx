import * as React from 'react';
import { Container, Col, Row, ColPicked } from './ticket.styled';

type ITicketsProps = {
  scale: boolean;
  tickets: any[];
  onTicketSelect: (r: number, c: number) => void;
  selected: boolean;
};
const Tickets = ({
  scale,
  tickets,
  onTicketSelect,
  selected,
}: ITicketsProps) => {
  return (
    <Container scale={scale}>
      {tickets.map((item: any, rowIndex: number) => {
        const seatRow: string = String.fromCharCode(65 + rowIndex);
        return (
          <Row key={'row' + rowIndex}>
            <span>{seatRow}</span>
            {item.map((_item: any, colIndex: number) => {
              if (_item.isPicked) {
                return <ColPicked scale={scale} />;
              }
              return (
                <Col
                  key={'col' + colIndex}
                  onClick={() => onTicketSelect(rowIndex, colIndex)}
                  scale={scale}
                  type={_item.type}
                  selected={selected}>
                  {selected ? `${seatRow} ${colIndex + 1}` : ''}
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};
export default Tickets;
