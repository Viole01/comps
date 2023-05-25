import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet
        dui eget tellus bibendum, vel dapibus lectus gravida. Nulla facilisi.
        Nam efficitur eu elit non vestibulum. Nunc finibus dui vel tellus
        vehicula dignissim. Vestibulum lorem mi, pretium sed orci vitae,
        sollicitudin porttitor risus. Sed vehicula imperdiet diam, id efficitur
        odio ullamcorper vel. Mauris finibus viverra magna, vel tempor dolor
        tempor nec. Sed at velit eget libero interdum dignissim. Pellentesque
        ultricies tellus urna, ac lobortis enim aliquet nec. Morbi vel lobortis
        tortor. Sed rhoncus dolor in vestibulum blandit. Mauris quis tempus sem.
      </p>
      <p>
        In placerat venenatis turpis. Nunc vehicula sapien metus, vel lobortis
        quam ultrices et. Integer vel turpis nec dui ultricies semper id in
        mauris. Nunc quis iaculis tellus. Aenean fringilla ante diam, ac congue
        nulla molestie at. Maecenas gravida imperdiet volutpat. Sed at tempor
        est, non lobortis lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet
        dui eget tellus bibendum, vel dapibus lectus gravida. Nulla facilisi.
        Nam efficitur eu elit non vestibulum. Nunc finibus dui vel tellus
        vehicula dignissim. Vestibulum lorem mi, pretium sed orci vitae,
        sollicitudin porttitor risus. Sed vehicula imperdiet diam, id efficitur
        odio ullamcorper vel. Mauris finibus viverra magna, vel tempor dolor
        tempor nec. Sed at velit eget libero interdum dignissim. Pellentesque
        ultricies tellus urna, ac lobortis enim aliquet nec. Morbi vel lobortis
        tortor. Sed rhoncus dolor in vestibulum blandit. Mauris quis tempus sem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet
        dui eget tellus bibendum, vel dapibus lectus gravida. Nulla facilisi.
        Nam efficitur eu elit non vestibulum. Nunc finibus dui vel tellus
        vehicula dignissim. Vestibulum lorem mi, pretium sed orci vitae,
        sollicitudin porttitor risus. Sed vehicula imperdiet diam, id efficitur
        odio ullamcorper vel. Mauris finibus viverra magna, vel tempor dolor
        tempor nec. Sed at velit eget libero interdum dignissim. Pellentesque
        ultricies tellus urna, ac lobortis enim aliquet nec. Morbi vel lobortis
        tortor. Sed rhoncus dolor in vestibulum blandit. Mauris quis tempus sem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet
        dui eget tellus bibendum, vel dapibus lectus gravida. Nulla facilisi.
        Nam efficitur eu elit non vestibulum. Nunc finibus dui vel tellus
        vehicula dignissim. Vestibulum lorem mi, pretium sed orci vitae,
        sollicitudin porttitor risus. Sed vehicula imperdiet diam, id efficitur
        odio ullamcorper vel. Mauris finibus viverra magna, vel tempor dolor
        tempor nec. Sed at velit eget libero interdum dignissim. Pellentesque
        ultricies tellus urna, ac lobortis enim aliquet nec. Morbi vel lobortis
        tortor. Sed rhoncus dolor in vestibulum blandit. Mauris quis tempus sem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet
        dui eget tellus bibendum, vel dapibus lectus gravida. Nulla facilisi.
        Nam efficitur eu elit non vestibulum. Nunc finibus dui vel tellus
        vehicula dignissim. Vestibulum lorem mi, pretium sed orci vitae,
        sollicitudin porttitor risus. Sed vehicula imperdiet diam, id efficitur
        odio ullamcorper vel. Mauris finibus viverra magna, vel tempor dolor
        tempor nec. Sed at velit eget libero interdum dignissim. Pellentesque
        ultricies tellus urna, ac lobortis enim aliquet nec. Morbi vel lobortis
        tortor. Sed rhoncus dolor in vestibulum blandit. Mauris quis tempus sem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet
        dui eget tellus bibendum, vel dapibus lectus gravida. Nulla facilisi.
        Nam efficitur eu elit non vestibulum. Nunc finibus dui vel tellus
        vehicula dignissim. Vestibulum lorem mi, pretium sed orci vitae,
        sollicitudin porttitor risus. Sed vehicula imperdiet diam, id efficitur
        odio ullamcorper vel. Mauris finibus viverra magna, vel tempor dolor
        tempor nec. Sed at velit eget libero interdum dignissim. Pellentesque
        ultricies tellus urna, ac lobortis enim aliquet nec. Morbi vel lobortis
        tortor. Sed rhoncus dolor in vestibulum blandit. Mauris quis tempus sem.
      </p>
    </div>
  );
}

export default ModalPage;
