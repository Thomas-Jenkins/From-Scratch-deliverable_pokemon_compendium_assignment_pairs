import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='pokeball-container'>
        <img src={`${process.env.PUBLIC_URL}/pokeball.png`}></img>
      </div>
      <div className='page-title'>
        <div>Unofficial Pokedex</div>
      </div>
    </div>
  );
}
