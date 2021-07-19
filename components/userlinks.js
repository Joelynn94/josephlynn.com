import Link from "next/link";

function UserLinks({ config }) {
  const { userLinks } = config;

  return (
    <ul className="user__links">
      {userLinks &&
        userLinks.map((link) => (
          <Link>
            <a
              className="social__link"
              target="_blank"
              href={link.url}
              key={link.label}
            >
              <img
                className="social__icon"
                src={link.icon}
                alt={`${link.label} icon`}
              />
            </a>
          </Link>
        ))}
    </ul>
  );
}

export default UserLinks;
