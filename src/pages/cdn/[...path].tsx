import FileExplorer from "@/components/FileExplorer";
import React from "react";

const CdnPage = () => {
  return (
    <div>
      <FileExplorer
        items={[
          {
            name: "file.txt",
            path: "/file.txt",
            ext: "txt",
            created: new Date(),
            type: 0,
          },
          {
            name: "file-1.txt",
            path: "/file-1.txt",
            ext: "txt",
            created: new Date(),
            type: 0,
          },
        ]}
      />
    </div>
  );
};

export default CdnPage;
