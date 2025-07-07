import Footer from './components/footer';
import Header from './components/header';
import ItemList from './components/item-list';

export function App() {
   return (
      <div className="wrapper-main">
         <main>
            <div className="inner">
               <Header />
               <ItemList />
               <Footer />
            </div>
         </main>
      </div>
   );
}

export default App;
