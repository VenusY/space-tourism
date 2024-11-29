import { useState } from 'react';
import data from '../../data.json';
import PaginationDots from './PaginationDots';

export default function MainContent() {
  const [member, setMember] = useState('Douglas Hurley');

  function changeMember(e) {
    setMember(e.currentTarget.dataset.name);
  }

  const members = data.crew;
  let role;
  let bio;

  for (let person of members) {
    if (person.name !== member) {
      continue;
    }

    role = person.role;
    bio = person.bio;
    break;
  }

  const nameSpaceDelimited = member.split(' ');
  let firstName = nameSpaceDelimited[0].toLowerCase();
  let lastName = nameSpaceDelimited[1].toLowerCase();

  return (
    <div className='crew__main-content'>
      <section className='crew__text-section'>
        <h2 className='crew__member-role'>{role}</h2>
        <h2 className='crew__member-name'>{member}</h2>
        <p className='crew__bio'>{bio}</p>

        <PaginationDots changeMember={changeMember} member={member} />
      </section>

      <div className='hero-image__container'>
        <img
          src={require(`./assets/image-${firstName}-${lastName}.png`)}
          alt={member}
          className={`hero-image hero-image--${firstName}`}
        />
      </div>
    </div>
  );
}
