import MainLayout from '@component/Layout/Layout'
import MyHeader from '@component/Header/Header'
import MyFooter from '@component/Footer/Footer'


function App() {
  return (
    <>
      <MainLayout>
        <MyHeader />
        Content
        <MyFooter />
      </MainLayout>
    </>
  );
}

export default App;
