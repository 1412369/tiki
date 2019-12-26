export const cacheTime = 3600000 * 24 * 30;
export const generateEmptyMap = ({
  row,
  col,
  vip,
  deluxe,
  picked,
}: {
  row: number;
  col: number;
  vip: number[];
  deluxe: number[];
  picked: number[];
}) => {
  const FROM = 0,
    TO = 1;
  return [...new Array(row)].map((_, rowIndex) =>
    [...new Array(col)].map((_, colIndex) => {
      const flatIndex: number = rowIndex * col + colIndex;
      if (flatIndex >= vip[FROM] && flatIndex <= vip[TO]) {
        return {
          type: 'vip',
          isPicked: picked.includes(flatIndex),
        };
      }
      if (flatIndex >= deluxe[FROM] && flatIndex <= deluxe[TO]) {
        return {
          type: 'deluxe',
          isPicked: picked.includes(flatIndex),
        };
      }
      return {
        type: 'standard',
        isPicked: picked.includes(flatIndex),
      };
    })
  );
};
