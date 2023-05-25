import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'lsdfad',
      label: 'Can I use React in project?',
      content: 'You can use React in any project you want',
    },
    {
      id: 'adsigds',
      label: 'Can I use JavaScript in project?',
      content: 'You can use JavaScript in any project you want',
    },
    {
      id: 'idgaew',
      label: 'Can I use CSS in project?',
      content: 'You can use CSS in any project you want',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
