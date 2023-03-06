import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    router.push(router.pathname, router.asPath, {
      locale: e.target.value
    });
  };

  return (
    <div>
      <nav>
        <div>
          <Link href="/">Home</Link> <Link href="/about">About</Link>
        </div>

        <label>
          <span>Language</span>
          <select value={router.locale} onChange={handleChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </label>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
