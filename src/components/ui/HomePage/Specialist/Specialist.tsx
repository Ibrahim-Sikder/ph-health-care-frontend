import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Container>
      <Box sx={{ margin: "25px 0", textAlign: "center" }}>
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments specialties{" "}
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Explore Doctors Across All.{" "}
          </Typography>
        </Box>
        <Stack direction="row" gap={4} mt={5}>
          {specialties?.slice(0, 6)?.map((specialty: any) => (
            <Box
              key={specialty._id}
              sx={{
                flex: 1,
                width: "150px",
                background: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(245, 245, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto ",
                },
                "&:hover": {
                  border: "1px solid blue",
                  borderRadius: "10px",
                  padding: "40px 10px",
                },
              }}

              component={Link}
              href={`/doctors?specialties=${specialty.title}`}
            >
              {specialty?.icon && (
                <Image
                  src={specialty.icon}
                  width="100"
                  height="100"
                  alt="icon"
                />
              )}

              <Box>
                <Typography fontWeight={600} mt={2}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            marginTop: "15px",
          }}
        >
          {" "}
          View All{" "}
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
