import React from "react";
import { ItemInfo } from "./types";
import { formatDateToYYYYDDMM } from "@/utils/date";
import tw, { css } from "twin.macro";

interface ItemProps
  extends ItemInfo,
    React.HTMLAttributes<HTMLTableRowElement> {}

const Item: React.FC<ItemProps> = ({ name, ext, type, created, ...rest }) => {
  return (
    <tr
      css={[
        tw`overflow-hidden border rounded-md hover:bg-zinc-200 focus:bg-zinc-200 focus:outline-none`,
        css`
          & > td {
            ${tw`p-2`}
          }
        `,
      ]}
      tabIndex={0}
      {...rest}
    >
      <td>{name}</td>
      <td>{ext}</td>
      <td>{type ? "파일" : "폴더"}</td>
      <td>{formatDateToYYYYDDMM(created)}</td>
    </tr>
  );
};

export default Item;
