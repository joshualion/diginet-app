//he
const getCsrfToken = async () => {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    const csrfToken = await $fetch(apiBase + "/sanctum/csrf-cookie");
    console.log("CSRF token obtained:", csrfToken);
    return csrfToken;
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
    return null; // Return null or handle the error appropriately
  }
};



export const register = async (userData: { firstname: string; lastname: string; email: string; password: string; password_confirmation: string }) => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

    // Define the interface for the expected CSRF response structure
    interface CsrfResponse {
      token: string;
    }

  try {
           
    const csrfResponse = await $fetch(apiBase + "/sanctum/csrf-cookie") as CsrfResponse;;

    // Extract the CSRF token string from the response object
    const csrfToken = csrfResponse.token; // Adjust this line according to your actual response structure

    console.log("CSRF token obtained:", csrfToken);

    if (!csrfToken) {
         throw new Error("Failed to obtain CSRF token");
      }

    const response = await $fetch(apiBase + "/register", {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken, // Include CSRF token in headers
      },
      body: JSON.stringify(userData), // Convert body to JSON string
      credentials: "include", // Include cookies in the request
    });

    return response;
  } catch (error: any) {
    console.error("Registration error:", error);
    throw new Error(error.message || "Registration failed");
  }
};

export const login = async (credentials: {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}) => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  try {
    const csrfToken = await getCsrfToken(); // Ensure CSRF token is set
    //console.log("CSRF token obtained:", csrfToken);

    const response = await $fetch(apiBase + "/login", {
      method: "POST",
      body: credentials,
      credentials: "include", // Include cookies in the request
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: document.referrer,
        "X-CSRF-TOKEN": csrfToken as string, // Include CSRF token in headers
      },
    });

    return response;
  } catch (error: any) {
    console.error("Login error:", error);
    throw new Error(error.message || "Login failed");
  }
};

export const logout = async () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  // Fetch CSRF token from Laravel Sanctum
  const csrfToken = await getCsrfToken(); // Ensure CSRF token is set

  //console.log("CSRF token obtained:", csrfToken);

  try {
    const response = await $fetch(apiBase + "/logout", {
      method: "POST",
      credentials: "include", // Include cookies in the request
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: document.referrer,
        "X-CSRF-TOKEN": csrfToken as string, // Include CSRF token in headers
        },
    });

    return response;
  } catch (error: any) {
    console.error("Logout error:", error);
    throw new Error(error.message || "Logout failed");
  }
};
