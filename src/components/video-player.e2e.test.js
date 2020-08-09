import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Video player e2e test pack`, () => {
  it(`Video player has play state`, () => {
    const videoPlayer = shallow(
        <VideoPlayer
          isPlaying={true}
          isPaused={false}
        />
    );

    expect(videoPlayer.instance().props.isPlaying).toEqual(true);
    expect(videoPlayer.instance().props.isPaused).toEqual(false);
  });

  it(`Video player has pause state`, () => {
    const videoPlayer = shallow(
        <VideoPlayer
          isPlaying={false}
          isPaused={true}
        />
    );

    expect(videoPlayer.instance().props.isPlaying).toEqual(false);
    expect(videoPlayer.instance().props.isPaused).toEqual(true);
  });
});
