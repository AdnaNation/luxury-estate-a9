import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateProfile = () => {
  const { user, name, setName, setPhotoURL, photoURL } =
    useContext(AuthContext);

  const handleSave = async () => {
    try {
      await updateProfile(user, { displayName: name, photoURL });
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="mx-auto min-h-screen w-3/4 md:w-2/4 text-center font-platypi ">
      <Helmet>
        <title>Luxury Estate | Update Profile </title>
      </Helmet>
      {user && (
        <form
          className=" mt-20 py-16 space-y-3 bg-white shadow-xl lg:mx-10  rounded-3xl"
          onSubmit={handleSave}
        >
          <div className="w-full">
            <label className="mr-1" htmlFor="name">
              Name:
            </label>
            <input
              className="border rounded"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div className="w-full">
            <label className="mr-1" htmlFor="photoURL">
              Photo URL:
            </label>
            <input
              className="border rounded"
              type="text"
              id="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <br />
          <button className="btn bg-blue-950 text-white" type="submit">
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateProfile;
