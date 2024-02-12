export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <section
          className="bg-cover bg-center w-full"
          style={{
            height: "750px",
            backgroundImage: `url('images/bg2.webp')`,
          }}
        >
          <div className="grid gap-4 grid-cols-2 flex h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="text-5xl font-bold">Our Modern Love</span>
              <br />
              <span>
                Neither of us really believed that we could find "The One"
                online -but that's exactly what happened!
              </span>
              <br />
              <span>
                We're each other's first swipes and each other's first online
                dates.
              </span>
              <br />
              <span>Each other's first and each other's last.</span>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img
                style={{
                  rotate: "4deg",
                  height: "440px",
                  objectFit: "cover",
                }}
                width={500}
                className="transform"
                src="images/person/IMG_3443.HEIC"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <section
          className="bg-cover bg-center w-full"
          style={{
            height: "750px",
            backgroundImage: `url('images/bg3.webp')`,
          }}
        >
          <div className="grid gap-4 grid-cols-2 flex h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img
                style={{
                  rotate: "355deg",
                  height: "440px",
                  objectFit: "cover",
                }}
                width={500}
                className="transform"
                src="images/person/IMG_3443.HEIC"
              />
            </div>
            <div className="flex flex-col items-left justify-center w-full h-full p-24">
              <span className="text-5xl font-bold">
                Please join our small and intimate wedding
              </span>
              <br />
              <span>3:00 PM onwards</span>
              <br />
              <span>May 14, 2025</span>
              <br />
              <span>
                The Morris-Raine Estate 123 Anywhere St., Any City, ST
                (Wheelchair accessible)
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
