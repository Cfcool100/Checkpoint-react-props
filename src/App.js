import MyProfile from './Profil/profil';
import myImage from './img/profile.jpg'

function App() {
  const fullName = "SISSOKO Youssouf";
  const bio = `I am a student to GOMYCODE, I follow a bootcamp web developper fullStack js.`;
  const Profession = 'Dev fullStack JS'
  const StyleProfile = {
    width: 100,
    height: 100,
    borderRadius: 500,
    border: '3px solid #0099DD',
    position: 'Absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  const cardStyle = {
    width: '300px',
    position: 'Absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '1rem',
    boxShadow: '0 0 1rem  #7A7A7A'
  }
  const separateStyle = {
    position: 'relative', 
    backgroundColor: 'cyan',
    borderRadius: '1rem', 
    borderBottom: '1px solid #f1f1f1', 
    height: '100px', 
    marginBottom:'3.5rem',
  }
  return (
    <>
      <div className="card" style={cardStyle}>
        <MyProfile fullName={fullName} bio={bio} Profession={Profession}>
        <div className="separate" style={separateStyle}>
          <div className="img-pofile" >
            <img src={myImage} alt="" style={StyleProfile}/>
          </div>
        </div>
        </MyProfile>
      </div>
    </>
  );
}

export default App;
