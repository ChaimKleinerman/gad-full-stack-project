import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Product } from "../typse/typse";

const generateCard = (product: Product) => {
  return (
    <Card
      key={product.id}
      sx={{
        width: 450,
        height: 350,
      }}
    >
      <div>
        <Typography level="title-lg">{product.title}</Typography>
        <Typography level="body-sm">{product.description}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={product.thumbnail} srcSet={product.thumbnailSet} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Brand:</Typography>
          <Typography fontSize="lg" fontWeight="lg">{product.brand}</Typography>
        </div>
        <div>
          <Typography level="body-xs">Category:</Typography>
          <Typography fontSize="lg" fontWeight="lg">{product.category}</Typography>
        </div>
        <div>
          <Typography level="body-xs">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {product.price}
          </Typography>
        </div>
        <div>
          <Typography level="body-xs">Discount:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {product.discountPercentage}%
          </Typography>
        </div>
        <div>
          <Typography level="body-xs">Rating:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {product.rating}
          </Typography>
        </div>
        <div>
          <Typography level="body-xs">Stock:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {product.stock}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

const BasicCard = (product:Product) => {
  return (
    <div style={{ overflow: "hidden", margin: 0 }}>
        <Card key={product.id} sx={{ width: 483, height: 380 }}>
          {generateCard(product)}
        </Card>
    </div>
  );
};

export default BasicCard;