import { SITE } from '@/data/site';

export default function TopBar() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="topbar">
        <div className="wrap">
          <p>{SITE.topBarText}</p>
          <p className="tb-contact">
            <span className="copyable">{SITE.email}</span>
            <span className="copyable">{SITE.phone}</span>
          </p>
        </div>
      </div>
    </>
  );
}
