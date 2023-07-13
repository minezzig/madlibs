"use client";

import { useState, useEffect } from "react";
import storiesList from "./stories.json";
import InputField from "./InputField";
import ShowStory from "./ShowStory";

type storiesProp = {
  title: string;
  story: { lines: string[]; spaces: string[] };
};
export default function Game() {
  const [words, setWords] = useState({});
  const [wordList, setWordList] = useState({});
  const [view, setView] = useState(false);
  const [stories, setStories] = useState<storiesProp>({
    title: " ",
    story: { lines: [""], spaces: [""] },
  });

  useEffect(() => {
    const selected =
      storiesList.stories[
        Math.floor(Math.random() * storiesList.stories.length)
      ];
    setStories(selected);
  }, []);

  const handleChange = (e: any) => {
    setWords({ ...words, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setWordList(words);

    setView(true);
  };

  const handleClear = () => {
    setWords({});
    setView(!view);
  };

  return (
    <>
      <h1>AdLib Game</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ backgroundColor: "lightblue" }}>
          {stories.story?.spaces.map((input) => (
            <div key={input}>
              <InputField
                words={words}
                handleChange={handleChange}
                input={input}
              />
            </div>
          ))}
        </div>
        <br />
        <button className="border" type="submit">
          Enter
        </button>
        <button className="border" type="reset" onClick={handleClear}>
          clear
        </button>
      </form>

      <div style={{ display: view ? "block" : "none" }}>
        <h1>{stories && stories.title}</h1>

        {Object.keys(wordList).length && (
          <ShowStory story={stories.story} wordList={wordList} />
        )}
      </div>
    </>
  );
}
