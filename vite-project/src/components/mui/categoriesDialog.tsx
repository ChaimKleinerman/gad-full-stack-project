import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Category } from "../../types";
import { Link } from "react-router-dom";

export interface SimpleDialogProps {
    open: boolean;

    onClose: (value: string) => void;
}

export default function SimpleDialogDemo() {
    function SimpleDialog(props: SimpleDialogProps) {
        const [categories, setCategories] = React.useState<Category[]>([]);
        React.useEffect(() => {
            fetch("http://localhost:3000/api/categories")
                .then((res) => res.json())
                .then(
                    (result) => {
                        console.log(result[0].name);
                        setCategories(result);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }, []);

        const { onClose, open } = props;


        return (
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>chose category</DialogTitle>
                <List sx={{ pt: 0 }}>
                    {categories.map((category) => {
                        console.log(category.name); // This will print each category to the console
                        return (
                            <Link to={`/categories/${category.name}`}>
                            <ListItem disableGutters key={category.name}>
                               
                                <ListItemButton
                                >
                                    <ListItemText primary={category.name} />
                                </ListItemButton>
                            </ListItem>
                            </Link>
                        );
                    })}
                </List>
            </Dialog>
        );
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };

    return (
        <div>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
                categories
            </Button>
            <SimpleDialog open={open} onClose={handleClose} />
        </div>
    );
}
