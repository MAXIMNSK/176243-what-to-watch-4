import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Video player e2e test pack`, () => {
  it(`Video player has play state`, () => {
    const videoPlayer = shallow(<VideoPlayer />);

    expect(videoPlayer.state().play).toBeDefined();
  });

  it(`Video player has pause state`, () => {
    const videoPlayer = shallow(<VideoPlayer />);

    expect(videoPlayer.state().pause).toBeDefined();
  });
});
