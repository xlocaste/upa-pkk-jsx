<?php

namespace App\Http\Requests\Mahasiswa;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama' => ['required'],
            'nim' => ['required'],
            'semester' => ['required', 'integer', 'min:0'],
            'ipk' => ['required', 'min:0', 'max:4', 'numeric'],
        ];
    }

    public function messages(): array
    {
        return [
            'nama.required' => 'Nama wajib diisi.',

            'nim.required' => 'NIM wajib diisi.',
            'nim.unique'   => 'NIM ini sudah terdaftar.',

            'semester.required' => 'Semester wajib diisi.',
            'semester.integer'  => 'Semester harus berupa angka bulat.',
            'semester.min'      => 'Semester minimal adalah 0.',

            'ipk.required' => 'IPK wajib diisi.',
            'ipk.numeric'  => 'IPK harus berupa angka.',
            'ipk.min'      => 'IPK minimal adalah 0.',
            'ipk.max'      => 'IPK maksimal adalah 4.',
        ];
    }
}
