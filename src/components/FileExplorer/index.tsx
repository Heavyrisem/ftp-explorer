import React from "react";
import { ItemInfo } from "./types";
import tw, { css } from "twin.macro";
import Item from "./Item";

interface FileExplorerProps {
  items: ItemInfo[];
}

const FileExplorer: React.FC<FileExplorerProps> = ({ items }) => {
  return (
    <div>
      <div className="m-4 p-2 border rounded-md border-zinc-200">
        <table className="table-fixed" width="100%">
          <thead>
            <tr
              css={[
                css`
                  & > th {
                    ${tw`text-left`}
                  }
                `,
              ]}
            >
              <th className="w-[75%]">파일명</th>
              <th className="">확장자</th>
              <th className="">파일 유형</th>
              <th className="">생성일</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Item key={item.path} {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileExplorer;
