import { useState } from 'react';
import PaginationDots from './PaginationDots';
import InfoSection from './InfoSection';
import HeroImage from './HeroImage';
import data from '../../data.json';

export default function MainContent() {
  const [selectedTech, setSelectedTech] = useState('Launch vehicle');

  function changeSelectedTech(e) {
    setSelectedTech(e.currentTarget.dataset.name);
  }

  const technologies = data.technology;
  let description;

  for (let technology of technologies) {
    if (technology.name !== selectedTech) {
      continue;
    }

    description = technology.description;
  }

  /**
   * Recursive immediately invoked function getFilePathSegment()
   *
   * Loops through each word of the technology's name and adds it to the file
   * path segment, which is then added to the file path in the HeroImage
   * component
   */
  const techNameSpaceDelimited = selectedTech.split(' ');
  let techName = '';

  (function getFilePathSegment(wordArray) {
    if (wordArray.length > 1) {
      techName += `${wordArray[0].toLowerCase()}-`;
      wordArray.shift();
      return getFilePathSegment(wordArray);
    } else {
      techName += wordArray[0].toLowerCase();
      return;
    }
  })(techNameSpaceDelimited);

  return (
    <div className='technology__main-content'>
      <PaginationDots
        selectedTech={selectedTech}
        changeSelectedTech={changeSelectedTech}
      />
      <InfoSection selectedTech={selectedTech} description={description} />
      <HeroImage
        selectedTech={selectedTech}
        portraitImg={require(`./assets/image-${techName}-portrait.jpg`)}
        landscapeImg={require(`./assets/image-${techName}-landscape.jpg`)}
      />
    </div>
  );
}
