<?php

namespace App\Http\Requests\MiniIndustriKampus;

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
            'nama_mik' => ['required', 'string', 'max:255'],
            'bidang_fokus_mik' => ['required', 'string', 'max:255'],
            'tahun_mik' => ['required', 'max:' . date('Y')],
            'tahun_exit_mik' => ['required', 'max:' . (date('Y') + 10)],
        ];
    }
}
