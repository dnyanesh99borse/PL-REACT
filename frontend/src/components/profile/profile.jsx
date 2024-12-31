import React, { useState } from 'react';
import "./profile.css";

const Profile = () => {

    const [profileData, setprofileData] = useState({
        name: 'Dnyaneshwar',
        profilephoto: '',
        profilebanner: '',
        email: 'borsednyanesh88@gmail.com',
        specialisation: "Computer Science",
        bio: "Passionate web developer with a love for creating interactive UIs.",
        education: "Master's in Computer Science",
        skills: "React, JavaScript, Tailwind, Node.js",
        university: "Tech University",
        country: "USA",
        city: "New York",
        mobile: "+1-123-456-7890",
        gender: "Male",
        birthday: "1995-10-20",
        social1: "https://www.youtube.com/@eagleofact",
        social2: "",
        social3: "",
    });

    //=============logic for profiledata editing============//
    const [tempData, setTempData] = useState({ ...profileData });
    const [isDataEditing, setisDataEditing] = useState(false);

    const handleInfoSaveClick = () => {
        setprofileData({ ...tempData });
        setisDataEditing(false);
        console.log("updated ProfileData Object: ", tempData);
    };

    const handleInfoEditClick = () => {
        setTempData({ ...profileData });
        setisDataEditing(true);
    };

    //=========logic for banner editing and saving===============//
    const [banner, Setbanner] = useState(null);
    const [isBannerEditing, setIsBannerEditing] = useState(false); // Track edit mode

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const ImageUrl = URL.createObjectURL(file);
            Setbanner(ImageUrl);
        }
    };

    const handleEditClick = () => {
        setIsBannerEditing(true);
    };

    const handleSaveClick = () => {
        setIsBannerEditing(false);
    };

    //=========logic for profile-picture editing and saving===============//
    const [image, setImage] = useState(null); // Store the uploaded image
    const [isImageEditing, setIsImageEditing] = useState(false); // Track edit mode

    const handleprofileImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the image
            setImage(imageUrl);
        }
    };

    const handleImageEditClick = () => {
        setIsImageEditing(true);
    };

    const handleImageSaveClick = () => {
        setIsImageEditing(false);
    };

    return (
        <>
            <div className='profilebody'>
                {/*-------Display the profile banner-----*/}
                <div className="profilebanner">
                    {banner ? (
                        <img
                            src={banner}
                            alt="profile-banner"
                        />
                    ) : (
                        <div style={{ textAlign: "center", color: "gray" }} className='msg'>No Banner</div>
                    )}


                    {/*-----banner edit button------ */}
                    {!isBannerEditing && (
                        <button onClick={handleEditClick} className='edit-btn'>
                            edit
                        </button>
                    )}

                    {/* Image Input and Save Button */}
                    {isBannerEditing && (
                        <div className='editbox'>
                            {/* Hidden File Input */}
                            <input
                                type='file'
                                accept='image/*'
                                onChange={handleImageChange}
                                id='fileInput'
                            />

                            <button className='save-button' onClick={handleSaveClick}>
                                Save
                            </button>
                        </div>
                    )}
                </div>

                <div className='profilesect'>
                    {/* <button>edit</button> */}
                    <div className='prof-dis'>
                        <div className='box left'>
                            <h1 className='mail'>{profileData.email}</h1>
                            <p className='connect'>Connect</p>

                            <a href={profileData.social1} target="_blank" rel="noopener noreferrer">
                                <img src={profileData.social1} alt="youtube" style={{ cursor: 'pointer' }} />
                            </a>
                            <img src={profileData.social2} alt="Instagram" />
                            <img src={profileData.social3} alt="github" />

                        </div>
                        <div className='box mid'>
                            <div className="prof-photo">
                                <div>
                                    {image ? (
                                        <img src={image} alt="Profile" />
                                    ) : (
                                        <div>No Image</div>
                                    )}
                                </div>
                            </div>

                            {!isImageEditing && (
                                <button
                                    onClick={handleImageEditClick}
                                    className="pic-edit">
                                    edit
                                </button>
                            )}

                            {/* Image Input and Save Button */}
                            {isImageEditing && (
                                <div className='pic-editbox'>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleprofileImageChange}
                                    />
                                    <button onClick={handleImageSaveClick} className='pic-save'>
                                        save
                                    </button>
                                </div>
                            )}

                            <h1 className='username'>{profileData.name}</h1>
                            <p className='bio'>{profileData.bio}</p>
                        </div>
                        <div className='box right'>
                            <button className='msg-btn'>message</button>
                            <button className='follow-btn'>follow</button>
                        </div>
                    </div>



                    <div>
                        {isDataEditing ? (
                            <div className='info-editbox'>
                                <div>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        value={tempData.name}
                                        onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>E-mail:</label>
                                    <input
                                        type="email"
                                        value={tempData.email}
                                        onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>Bio:</label>
                                    <input
                                        type="text"
                                        value={tempData.bio}
                                        onChange={(e) => setTempData({ ...tempData, bio: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>Specialisation:</label>
                                    <input
                                        type="text"
                                        value={tempData.specialisation}
                                        onChange={(e) => setTempData({ ...tempData, specialisation: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>Education</label>
                                    <input
                                        type="text"
                                        value={tempData.education}
                                        onChange={(e) => setTempData({ ...tempData, education: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>University:</label>
                                    <input
                                        type="text"
                                        value={tempData.university}
                                        onChange={(e) => setTempData({ ...tempData, university: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>Skills:</label>
                                    <input
                                        type="text"
                                        value={tempData.skills}
                                        onChange={(e) => setTempData({ ...tempData, skills: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>Country:</label>
                                    <input
                                        type="text"
                                        value={tempData.country}
                                        onChange={(e) => setTempData({ ...tempData, country: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>City:</label>
                                    <input
                                        type="text"
                                        value={tempData.city}
                                        onChange={(e) => setTempData({ ...tempData, city: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label>Contact-No:</label>
                                    <input
                                        type="number"
                                        value={tempData.mobile}
                                        onChange={(e) => setTempData({ ...tempData, mobile: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label>Gender:</label>
                                    <input
                                        type="text"
                                        value={tempData.gender}
                                        onChange={(e) => setTempData({ ...tempData, gender: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label>Birthday:</label>
                                    <input
                                        type="date"
                                        value={tempData.birthday}
                                        onChange={(e) => setTempData({ ...tempData, birthday: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label>Social-1:</label>
                                    <input
                                        type="url"
                                        value={tempData.social1}
                                        onChange={(e) => setTempData({ ...tempData, social1: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label>Social-2:</label>
                                    <input
                                        type="url"
                                        value={tempData.social2}
                                        onChange={(e) => setTempData({ ...tempData, social2: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label>Social-3:</label>
                                    <input
                                        type="url"
                                        value={tempData.social3}
                                        onChange={(e) => setTempData({ ...tempData, social3: e.target.value })}
                                    />
                                </div>

                                <button onClick={handleInfoSaveClick}>Save</button>
                            </div>
                        ) : (

                            <div className="profile-info">
                                <button onClick={handleInfoEditClick}>Edit</button>
                                <div>
                                    <label>Specialisation</label>
                                    <div>{profileData.specialisation}</div>
                                </div>
                                {/* <div>
                                    <label>Bio</label>
                                    <div>{profileData.bio}</div>
                                </div> */}
                                <div>
                                    <label>Education</label>
                                    <div>{profileData.education}</div>
                                </div>
                                <div>
                                    <label>Skills</label>
                                    <div>{profileData.skills}</div>
                                </div>
                                <div>
                                    <label>University</label>
                                    <div>{profileData.university}</div>
                                </div>
                                <div>
                                    <label>Country</label>
                                    <div>{profileData.country}</div>
                                </div>
                                <div>
                                    <label>City</label>
                                    <div>{profileData.city}</div>
                                </div>
                                <div>
                                    <label>Mobile</label>
                                    <div>{profileData.mobile}</div>
                                </div>
                                <div>
                                    <label>Gender</label>
                                    <div>{profileData.gender}</div>
                                </div>
                                <div>
                                    <label>Birthday</label>
                                    <div>{profileData.birthday}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile

