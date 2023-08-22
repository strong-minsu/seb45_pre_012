// import BaseHeader from '../components/BaseHeader.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CardList from '../components/CardList.jsx';

import './Home.css';
function Home() {
  // return (
  //   <div>
  //     <BaseHeader />
  //     test
  //     <Footer />
  //   </div>
  // );

  // 로그인 된 상태태
  return (
    <div className="home">
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
