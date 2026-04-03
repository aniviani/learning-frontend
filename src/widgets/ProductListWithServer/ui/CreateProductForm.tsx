import { type ChangeEventHandler, useState } from 'react';
import { useCreateProductMutation } from '../model/useCreateProductMutation.ts';

interface IForm {
  name: string;
  description: string;
  price: number;
  category: string;
}

export const CreateProductForm = () => {
  const { createProduct } = useCreateProductMutation();
  const [form, setForm] = useState<IForm>({
    name: '',
    description: '',
    price: 0,
    category: '',
  });

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newName = event.target.value;
    setForm({
      name: newName,
      description: form.description,
      price: form.price,
      category: form.category,
    });
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newDescription = event.target.value;
    setForm({
      name: form.name,
      description: newDescription,
      price: form.price,
      category: form.category,
    });
  };

  const handlePriceChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newPrice = event.target.valueAsNumber;
    console.log({ newPrice });
    setForm({
      name: form.name,
      description: form.description,
      price: newPrice,
      category: form.category,
    });
  };

  const handleCategoryChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newCategory = event.target.value;
    setForm({
      name: form.name,
      description: form.description,
      price: form.price,
      category: newCategory,
    });
  };

  const submit = () => {
    void createProduct({
      name: form.name,
      description: form.description,
      price: form.price,
      category: form.category,
    });
    setForm({
      name: '',
      description: '',
      price: 0,
      category: '',
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="введите название"
        value={form.name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="введите описание"
        value={form.description}
        onChange={handleDescriptionChange}
      />
      <input
        type="number"
        placeholder="введите стоимость"
        value={form.price}
        onChange={handlePriceChange}
      />
      <input
        type="text"
        placeholder="введите категорию"
        value={form.category}
        onChange={handleCategoryChange}
      />
      <button
        onClick={submit}
        disabled={
          !form.name || !form.description || !form.price || !form.category
        }
      >
        добавить товар
      </button>
    </div>
  );
};
