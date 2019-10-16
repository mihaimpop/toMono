this.audioElement = this.audioElement || undefined;
this.maxChannelCount = this.initialChannelCount || undefined;
this.mono = this.mono || undefined;
this.connected = this.connected || undefined;
this.context = this.context || new AudioContext();

(() => {
  'use strict';
  const videos = document.getElementsByTagName("video");
  if (this.audioElement === undefined) {
    this.audioElement = this.context.createMediaElementSource(videos[0]);
  }
  this.maxChannelCount = this.context.destination.maxChannelCount;
  this.mono = !mono;

  this.mono ? this.context.destination.channelCount = 1 : this.context.destination.channelCount = maxChannelCount;
  audioElement.disconnect();
  audioElement.connect(this.context.destination);
})();
