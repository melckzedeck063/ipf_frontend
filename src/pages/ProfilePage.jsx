import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../shared/DashboardLayout";
import { profile, updateProfile } from "../store/apiController";

const UserProfile = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await profile();
        if (response?.error === false) {
          setProfiles(response.data);
          setValue("firstName", response.data.firstName);
          setValue("lastName", response.data.lastName);
          setValue("email", response.data.username);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      const respone =  await updateProfile(data);
      setProfiles(data);
      setIsEditing(false);
      console.log("Profile updated successfully:", data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-300 flex flex-col items-center p-4 mt-24">
        <div className="w-full max-w-lg bg-gray-600 shadow-lg rounded-lg p-6 mt-16">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">User Profile</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-400">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-300">{profiles.firstName}</p>
              )}
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
            </div>

            <div>
              <label className="block text-gray-400">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-300">{profiles.lastName}</p>
              )}
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
            </div>

            <div>
              <label className="block text-gray-400">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address"
                    }
                  })}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-300">{profiles.username}</p>
              )}
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="flex justify-end space-x-2">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-300 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;
