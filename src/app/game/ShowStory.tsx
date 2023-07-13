type ShowStoryProps = {
  story: { lines: string[]; spaces: string[] };
  wordList: { [key: string]: string };
};

function ShowStory({ story, wordList }: ShowStoryProps) {
  const finalStory: string[] = [];
  //!change to Max(lines or spaces)
  for (let i = 0; i < Object.keys(wordList).length; i++) {
    finalStory.push(story.lines[i]);
    finalStory.push(wordList[story.spaces[i]]);
  }
  return <>{finalStory}</>;
}

export default ShowStory;
