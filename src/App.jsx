import MainLayout from '@component/Layout/Layout'
import MyHeader from '@component/Header/Header'
import MyFooter from '@component/Footer/Footer'
import MyButton from './components/Button/Button';


function App() {
  return (
    <>
      <MainLayout>
        {/* <MyHeader />
        Content
        <MyFooter /> */}
        <MyButton />
      </MainLayout>
    </>
  );
}

export default App;
