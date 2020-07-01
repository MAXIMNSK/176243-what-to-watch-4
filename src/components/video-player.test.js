import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player.jsx";

const mock = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  picture: `https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg`,
  id: `f1`,
  playStatus: false,
};

describe(`Video player snapshot tests`, () => {
  it(`First test player`, () => {
    const player = renderer.create(
        <VideoPlayer
          src={mock.src}
          poster={mock.picture}
          playStatus={mock.playStatus}
        />
    ).toJSON();

    expect(player).toMatchSnapshot();
  });
});
