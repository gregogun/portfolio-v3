import { icon } from '@/styles/icon';
import { styled } from 'stitches.config';
import socials from 'data/socials';

const ListItem = styled('li', {
  listStyle: 'none',
  p: '$2',
});

const List = styled('ul', {
  textIndent: '0',
  listStyleType: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '248px',
});

const VisuallyHidden = styled('span', {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap' /* added line */,
  border: 0,
});

const Link = ({ children, href, isExternal = false }) => {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </a>
  );
};

const IconLink = ({ Icon, href, title = null, color = null, ...props }) => {
  return (
    <Link href={href} isExternal {...props}>
      <Icon
        className={icon({
          css: {
            '&:hover': { fill: color, transform: 'translateY(-2px)' },
          },
        })}
        aria-hidden="true"
        focusable="false"
      />
      <VisuallyHidden>{title}</VisuallyHidden>
    </Link>
  );
};

export default function Socials() {
  return (
    <List>
      {socials.map((social) => (
        <ListItem key={social.name}>
          <IconLink
            Icon={social.icon}
            href={social.href}
            color={social.color}
            title={social.name}
          ></IconLink>
        </ListItem>
      ))}
    </List>
  );
}
