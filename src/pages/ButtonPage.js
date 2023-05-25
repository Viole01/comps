import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          See Deals!
        </Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button outline danger>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
