import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Alert, Accordion, Badge, Breadcrumbs, Button, CallOutBox, Card, CardGroup, Checkbox, Heading, IconCard, PageHeader, Pagination, Radio, Section, Select, StatCard, Status, Tabs, Textarea, TextField } from '../src/index';
import '../dist/styles.css';

function Demo() {
  const [page, setPage] = useState(1);
  const items = [{ id: 'services', title: 'Services', content: <p>Explore the services available in your community.</p> }, { id: 'events', title: 'Events', content: <p>Find upcoming events and activities.</p> }];
  return <main>
    <Breadcrumbs items={[{ text: 'Home', href: '/' }, { text: 'React library' }]} />
    <Section><PageHeader title="React Component Library" /><p>The existing visual system, rendered with reusable React components.</p></Section>
    <Alert title="Welcome to the React library" dismissible>Components use the original design system styles.</Alert>
    <Section title="Buttons and badges" padding="m"><div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}><Button>Primary action</Button><Button modifiers={['secondary']}>Secondary action</Button><Button href="#cards" cta>Browse cards</Button><Button disabled>Disabled</Button><Badge label="Category">Community</Badge></div></Section>
    <Section id="cards" title="Cards" padding="m"><CardGroup><Card title="Community services" href="#services"><p>Helpful resources for residents.</p></Card><Card title="Latest news" date="October 8, 2026" tags="News"><p>Updates from across the community.</p></Card><Card title="Get involved" background><p>Connect with your neighbors.</p><Button>Learn more</Button></Card></CardGroup><IconCard title="Explore the library" icon="◇" href="#forms" cta><p>Find resources and support.</p></IconCard><StatCard stat="24" description="Community locations" /></Section>
    <Section title="Interactive components" padding="m"><Heading level={3}>Accordion</Heading><Accordion items={items} /><Heading level={3}>Tabs</Heading><Tabs label="Community information" items={items} /><Pagination page={page} pageCount={12} onPageChange={setPage} /><p>Selected page: {page}</p></Section>
    <Section id="forms" title="Forms" padding="m"><form onSubmit={event => event.preventDefault()} style={{ maxWidth: 600 }}><TextField label="Name" name="name" autoComplete="name" required description="Enter your full name." /><TextField label="Email" name="email" type="email" error="Enter a valid email address." /><Select label="Topic" name="topic"><option>Services</option><option>Events</option></Select><Textarea label="Message" name="message" rows={4} /><Checkbox label="Send me updates" name="updates" /><fieldset><legend>Preferred contact method</legend><Radio label="Email" name="contact" value="email" /><Radio label="Phone" name="contact" value="phone" /></fieldset><Button type="submit">Submit</Button></form></Section>
    <Section title="Messages" padding="m"><Status messages={['Your changes have been saved.']} /><CallOutBox><Heading level={3}>Need help?</Heading><p>Contact your local community team.</p></CallOutBox></Section>
  </main>;
}
createRoot(document.getElementById('root')!).render(<Demo />);
