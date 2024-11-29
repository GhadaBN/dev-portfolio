import React from "react";
import ReactPlayer from "react-player";

const Boards = ({ projectBoards }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="boards-wrapper flex flex-col items-center w-full">
        {projectBoards?.map((board, index) => (
          <div
            key={index}
            className="board-item my-2 w-[90vw] rounded-xl overflow-hidden"
          >
            {board.type === "image" && (
              <img
                src={board.src}
                alt={`Board ${index + 1}`}
                className="board w-full h-auto block object-contain rounded-xl"
              />
            )}
            {board.type === "video" && (
              <div className="rounded-xl overflow-hidden">
                <ReactPlayer
                  url={board.src}
                  playing
                  loop
                  muted
                  controls={false}
                  width="100%"
                  height="100%"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boards;
