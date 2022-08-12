import { Delete, Edit, Remove } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ListItemIcon, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FC, MouseEvent, useState } from "react";
import { Product } from ".";

const ITEM_HEIGHT = 48;

type OptionsMenuProps = {
  data: Product;
};

const OptionsMenu: FC<OptionsMenuProps> = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // Implement edit functionality

    handleClose();
  };

  const handleDelete = () => {
    // Implement delete functionality

    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "180px",
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleEdit}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Editar</Typography>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Excluir</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default OptionsMenu;
